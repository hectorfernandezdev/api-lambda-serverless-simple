# API using AWS Lambda


Project created to show the process to deploy a simple AWS LAMBDA with Node.js using [Serverless Framework](https://www.serverless.com/).

This CRUD is for players you can interact with the API

## :stop_sign: Pre-requirements

0) Postman

[Postman](https://www.postman.com/downloads/)


0.1) Serverless Framework
```
npm install -g serverless
```

0.2) AWS CLI

### * Windows / Linux
[AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
### * MacOS
```
brew install awscli
```


1) Create a S3 Bucket called "api-lambda-USERNAME" 
when USERNAME is the USER_NAME defined on keys.yml  

Bucket example: 
```
api-lambda-hectorfernandez
```

2) Create an AWS IAM user and keep the aws_access_key_id and the aws_secret_access_key
(Optional in live workshop, ask the instructor)

3) Install [Serverless Framework](https://www.serverless.com/) CLI v3

4) Use node version 16.x  (we recommended NVM)

```
nvm use 16.13.1

```


## :racing_car: 1,2,3... here we go!

*Complete the file keys.yml with your data

Run the following command:

```
serverless offline 
```


After testing you can deploy it.

```
serverless deploy 
```

1) Hello, method POST
```
https://XXXXX.execute-api.us-west-2.amazonaws.com/dev/hello
```

Body payload: 
```
{
    "username": "montevideo"
}
```

## :wave: Credits
> Hector Fernandez, AWS Community Builder
> Montevideo, Uruguay

[Demo with DynamoDB](https://github.com/hectorfernandezdev/serverless-demo-api-lambda-dynamodb)

[LinkedIn:](https://www.linkedin.com/in/hectorfernandez02/)

[Podcast:](https://cloudparatodos.substack.com/podcast)

[Meetup proximos eventos:](https://www.meetup.com/es-ES/aws-ug-montevideo/events/)


