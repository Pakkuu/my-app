import Skill from "../components/Skill";

export default function Skills() {
  return (
    <div className="mt-[1.5vh] mb-[5.4vh] max-w-[70%] mx-auto">
      <div className="grid grid-cols-6 grid-rows-3 gap-[1.5vh]">
        <Skill src="/lambda.svg" name="AWS Lambda"/>
        <Skill src="/dynamo.svg" name="AWS DynamoDB"/>
        <Skill src="/s3.svg" name="AWS S3"/>
        <Skill src="/textract.svg" name="AWS Textract"/>
        <Skill src="/react.png" name="React"/>
        <Skill src="/nextjs.svg" name="NextJS"/>
        <Skill src="/typescript.svg" name="Typescript"/>
        <Skill src="/nodejs.svg" name="NodeJS"/>
        <Skill src="/tailwind.png" name="Tailwind"/>
        <Skill src="/javascript.png" name="Javascript"/>
        <Skill src="/html.png" name="HTML"/>
        <Skill src="/css.png" name="CSS"/>
        <Skill src="/python.png" name="Python"/>
        <Skill src="/c++.png" name="C++"/>
        <Skill src="/java.svg" name="Java"/>
        <Skill src="/pinecone.png" name="Pinecone"/>
        <Skill src="/anthropic.jpeg" name="Claude3"/>
        <Skill src="/langchain.png" name="LangChain"/>
        <Skill src="/flask.svg" name="Flask"/>
      </div>
    </div>
  );
};