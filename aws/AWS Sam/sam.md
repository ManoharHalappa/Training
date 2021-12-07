https://aws.amazon.com/blogs/compute/working-with-aws-lambda-and-lambda-layers-in-aws-sam/

# SAM Commands

```
    node-version: 16
      - run: npm i
      - name: Build using SAM
        run: sam build --template-file template.yaml
      - name: Configuring AWS credentials...
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.ENGINEERING_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.ENGINEERING_SECRET_ACCESS_KEY }}
          aws-region: eu-west-2
      - name: Package using SAM
        run: sam package --template-file template.yaml --region eu-west-2 --s3-bucket <bucket-name> --s3-prefix <folder-path> --output-template-file out.yamlDe
      - name: Deploy using SAM
        run: sam deploy --region eu-west-2 --no-fail-on-empty-changeset --stack-name <stack-name> --s3-bucket <bucket-name> --s3-prefix <folder-path> --template-file out.yaml --capabilities CAPABILITY_IAM

```

# SAM Examples

AWS Lambda with permissions

https://aws.amazon.com/premiumsupport/knowledge-center/lambda-sam-template-permissions/
