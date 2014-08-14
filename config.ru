require "rubygems"

require "rack"
require "middleman/rack"
require "rack/contrib/try_static"
require "google/api_client"

CLIENT_ID = '549357532790-0aq5s5rdra6m348443rm4gv0bvc2et55.apps.googleusercontent.com'
CLIENT_SECRET = 'TdshQfRxiETF5Zeggwv6SZbr'
REDIRECT_URI = 'http://127.0.0.1:8080/greatgreensources/'
REFRESH_TOKEN = '1/D5zlpZ126qACmyny4lnyECk2D_FTkTc0PyBeu6QXRos'
SCOPES = [
    'https://www.googleapis.com/auth/drive.file'
]

##
# Exchange an authorization code for OAuth 2.0 credentials.
#
# @param [String] auth_code
#   Authorization code to exchange for OAuth 2.0 credentials.
# @return [Signet::OAuth2::Client]
#  OAuth 2.0 credentials.
def exchange_code(authorization_code)
  client = Google::APIClient.new
  client.authorization.client_id = CLIENT_ID
  client.authorization.client_secret = CLIENT_SECRET
  client.authorization.code = authorization_code
  client.authorization.redirect_uri = REDIRECT_URI

  begin
    client.authorization.fetch_access_token!
    return client.authorization
  rescue Signet::AuthorizationError
    raise CodeExchangeError.new(nil)
  end
end


# Build the static site when the app boots
`bundle exec middleman build`

# Enable proper HEAD responses
use Rack::Head
# Attempt to serve static HTML files
use Rack::TryStatic,
    :root => "tmp",
    :urls => %w[/],
    :try => ['.html', 'index.html', '/index.html']

# Serve a 404 page if all else fails
run lambda { |env|
  [
    404,
    {
      "Content-Type"  => "text/html",
      "Cache-Control" => "public, max-age=60"
    },
    File.open("tmp/404/index.html", File::RDONLY)
  ]
}