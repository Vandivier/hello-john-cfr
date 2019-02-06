# hello-john-cfr
Cloudformation + React = Serverless Starter 💕🔥

# Miscellaneous Notes

1. Start by following https://serverless.com/framework/docs/providers/aws/guide/quick-start/
    1. `npm install -g serverless`
    2. Made IAM user with name serverless-test, per [video instructions](https://www.youtube.com/watch?v=KngM5bfpttA).
    3. convention: keep credentials.csv in root folder. It will be gitignored.
2. targeting create-react-app as static site in S3
    1. ref: https://facebook.github.io/create-react-app/docs/deployment
    2. ref: https://facebook.github.io/create-react-app/docs/pre-rendering-into-static-html-files
3. basic flow
    1. land on home page, you are a guest.
    2. say hello guest.
    3. optionally, log in (as john, only seeded user)
    4. then, say hello john by fetching user info.
    5. john has option to create new users who can then log in and see hello to them.
