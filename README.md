
### Resources

<details>
<summary>Data fetch URLs</summary>

- **Note:** Use the below sample code snippet to make a POST request on Login using valid username and password.

  ```js
  const options = {
    method: 'POST',
    body: JSON.stringify(userDetails),
  }
  ```

**Login API**

#### URL: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Sample request object:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

**Top Rated Books API**

#### URL: `https://apis.ccbp.in/book-hub/top-rated-books`

#### Method: `GET`

#### Description:

Returns a response containing the list of 10 top rated books

#### Sample Response

```json
{
  "books": [
    {
      "id": "561d0af9-3cec-426d-9721-35ed8d7e9c3c",
      "author_name": "Chetan Bhagat",
      "cover_pic": "https://assets.ccbp.in/frontend/react-js/half-girlfriend-book.png",
      "title": "Half Girlfriend"
    },
    {
      "id": "5f7fe73a-c4f2-4d58-b4ad-ec88426e26be",
      "author_name": "Robert Kiyosaki",
      "cover_pic": "https://assets.ccbp.in/frontend/react-js/rich-dad-poor-dad-book.png",
      "title": "Rich Dad Poor Dad"
    },
    ...
  ],
  "total": 10
}
```

**Books API**

#### URL: `https://apis.ccbp.in/book-hub/books?shelf={bookshelfName}&search={searchText}`

#### Example: `https://apis.ccbp.in/book-hub/books?shelf=Read&search=Luke`

#### Method: `GET`

#### Description:

Returns a response containing the list of books based on the query parameters

#### Sample Response

```json
{
  "books": [
    {
      "id": "54402549-a4bd-4c99-a176-bd795d47173a",
      "title": "One life one chance",
      "read_status": "Read",
      "rating": 4.2,
      "author_name": "Luke Richmond",
      "cover_pic": "https://assets.ccbp.in/frontend/react-js/one-life-one-chance-book.png"
    },
    ...
  ],
  "total": 10
}
```

**Book Details API**

#### URL: `https://apis.ccbp.in/book-hub/books/{bookId}`

#### Example: `https://apis.ccbp.in/book-hub/books/7850622e-1b70-4396-963d-e68d5a2577d7`

#### Method: `GET`

#### Description:

Returns a response containing book details

#### Sample Response

```json
{
  "book_details": {
    "id": "7850622e-1b70-4396-963d-e68d5a2577d7",
    "author_name": "Ady Barkan",
    "cover_pic": "https://assets.ccbp.in/frontend/react-js/eyes-to-the-wind-book.png",
    "about_book": "Eyes to the Wind is a rousing memoir featuring intertwining storylines about determination, perseverance, and how to live a life filled with purpose and intention.",
    "rating": 4.8,
    "read_status": "READ",
    "title": "Eyes to the Wind",
    "about_author": "Ady Barkan is an American lawyer and liberal activist. He is a co-founder of the Be a Hero PAC and is an organizer for the Center for Popular Democracy, where he led the Fed Up campaign."
  }
}
```

</details>

### User Credentials

<details>
<summary>Click to view user credentials</summary>

<br/>

**You can use any one of the following credentials**

```text
  username: aakash
  password: sky@007
```

```text
  username: agastya
  password: myth#789
```

```text
  username: advika
  password: world@5
```

```text
  username: binita
  password: modest*6
```

```text
  username: chetan
  password: vigor$life
```

```text
  username: deepak
  password: lightstar@1
```

```text
  username: harshad
  password: joy@85
```

```text
  username: kapil
  password: moon$008
```

```text
 username: rahul
 password: rahul@2021
```

```text
  username: shravya
  password: musical#stone
```

```text
  username: saira
  password: princess@9
```

<br/>
</details>

