# reading-races

Reading Races is a Browser Enabled Speech Recognizer application aims to improve reading fluency and comprehension of 1st and 2nd grade students at risk for learning disabilities/reading failure by combining repeated readings, cultural relevance, affirmations and goal setting.

# Installation

=> Install Python 3 if it is not available in your system.
=> Run the following command in the command window with the downloaded readingRaces folder as the current directory with a port number
python -m http.server 8100 (for windows OS)
python3 -m http.server 8100 (for MAC OS)
=> Open the "readingRaces.html".

# AWS Usage

DO NOT COMMIT YOUR ACCESS KEYS TO GIT. THIS IS A MASSIVE BREECH OF SECURITY AND WILL RESULT IN THE STEALING OF YOUR AWS ACCOUNT

You need to configure AWS access with file outside of git. I have set this up to be config.js
Create the config.js file manually and make it look like

var awsConfig = {
region: "us-west-2",
accessKeyId: "accessKey",
secretAccessKey: "secretAccessKey"
};

This is all that should be in the file.

To get accessKeyId and secretAccessKey, you need to create an AWS account and create IAM user with full DynamoDB access:

1. Sign up for AWS.
2. Get an AWS access key.
   a) Open the IAM console
   (https://console.aws.amazon.com/iam/home?#/home).
   b) In the navigation pane of the console, choose Users.
   c) Choose your IAM user name (not the check box).
   d) Choose the Security credentials tab and then choose Create access key.
   e) To see the new access key, choose Show. Your credentials will look something like this:
   Access key ID: AKIAIOSFODNN7EXAMPLE
   Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

Created stories from CSLU data is in cslu-rr-stories.csv

# High AWS Bills - Be Careful

This project uses DynamoDB, what is a backend-as-a-service. This is a paid service and we have had mutltiple developers
fall into the trap of huge AWS bills. We have since fixed this.

AWS has two pricing models: https://aws.amazon.com/dynamodb/pricing/

We use provisioned. This means you pay for units of work/server time regardless of whether you use them. Previous commits
of this codebase had provisioned work of 500 write and read hours. This is way too much. We brought it down to
1 write/read units and this keeps us in the free tier of AWS. This is also plently of work for developer purposes.
It is still suggested that after these tables are created that you created alerts on the tables for high usage
and charges. But it should be fine at these low numbers.

The numbers have been adjusted in the codebase so this doesn't happen again, but FYI. Do this at your own risks

# Plugins used

Please use prettier in your preferred IDE. This will give us consistent auto-formatting in the project
