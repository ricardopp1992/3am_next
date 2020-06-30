import { FormEvent } from "react";
import { NextPage, GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { IncomingMessage } from "http";

const Login: NextPage = () => {
  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    console.log('form sent');
  }

  return (
    <form action="/auth" method="POST">
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="passpword" name="password" />
      <input type="submit" value="login!!!" />

       <div>
         <a href="http://localhost:3000/oauth/facebook" > FACEBOOK!</a>
         <a href="http://localhost:3000/oauth/google" > GOOGLE!</a>
         <a href="http://localhost:3000/oauth/twitter" > twitter!</a>
       </div>
    </form>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const req: IconmmingRequest = ctx.req;
  const { user } = req;
  console.log('server login', user);
  const result: GetServerSidePropsResult<IResult> = { props: { myKey: "dsfsdf" } }
  return result;
}

interface IResult {
  myKey: string;
}

interface IconmmingRequest extends IncomingMessage {
  user?: string;
}

export default Login;