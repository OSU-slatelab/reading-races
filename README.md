# reading-races

Reading Races is a Browser Enabled Speech Recognizer application aims to improve reading fluency and comprehension of 1st and 2nd grade students at risk for learning disabilities/reading failure by combining repeated readings, cultural relevance, affirmations and goal setting.

# AWS Usage/ High Bills

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
