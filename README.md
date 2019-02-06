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
4. to be express like or nah?
    1. ref: https://serverless.com/blog/serverless-express-rest-api/
    2. note serverless-offline discussed above for local dev
5. Testing
    1. Unit via Jest, or fall back to mocha. ref: https://serverless.com/blog/unit-testing-nodejs-serverless-jest/
    2. E2e via Cypress.
    3. Client also in Jest.
6. Automate UI deployment to S3
    1. Looks like `npm serverless` doesn't do this.
    2. Route forward looks like aws cli:
        1. ref: https://stackoverflow.com/questions/43083800/automate-deployment-of-static-website-files-to-s3-after-the-build
        2. ref: https://developer.okta.com/blog/2018/07/31/use-aws-cloudformation-to-automate-static-site-deployment-with-s3
        3. ref: https://serverless-stack.com/chapters/deploy-to-s3.html
        4. ref: https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af
