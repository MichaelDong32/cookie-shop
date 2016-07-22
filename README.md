# cookie-shop

## User Stories. As a user I want to:
- sign up for an accout
- log into my accout
- add products to my shopping cart
- I can see how many items are in my account
- see what's in my shoping cart
- remove products from my cart
- confirm my purchase

## Pages
- Splash page, products. "/"
- Login. "/login"
- Create Account. "/users/new"
- Cart. "/cart"
- Order complete. "/complete"

## Tech
express (express-generator) fully server side
passport
handlebars
knex (sqlite for dev)

## Database

### users:
|id|name|email|password|

### products
|id|name|description|price|image_url|

### cart
|id|user_id|complete|

### cart_join
|cart_id|product_id|

