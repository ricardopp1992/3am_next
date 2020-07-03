import { FormEvent, useRef } from "react";
import { NextPage, GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { IServerSideRequest } from "../../interfaces/IServer";

const Login: NextPage<IResult> = ({ error }) => {
  const formElement = useRef<HTMLFormElement>();

  const sendForm = async (event: FormEvent<ILoginForm>) => {

  }

  const sendForm_old = async (event: FormEvent<ILoginForm>) => {
    event.preventDefault();
    console.log('before if');
    const data = await mockFetch(event.currentTarget.username.value);
    if (data === 'nope') {
      console.log('die here');
    } else if (data === 'done') {
      console.log('let persist');
      // it makes a recursive event
      formElement.current.dispatchEvent(new Event('submit', { cancelable: true }));
    }
  }

  return (
    <form ref={formElement} onSubmit={sendForm} action="/auth" method="POST">
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="passpword" name="password" />
      {
        error.length > 0 && <span>Wrong Credentials</span>
      }
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
  const req: IServerSideRequest = ctx.req;
  const { user } = req;
  const error = req.flash().error || false;
  console.log('server login', user);
  const result: GetServerSidePropsResult<IResult> = { props: { myKey: "dsfsdf", error } }
  return result;
}

function mockFetch (username: string) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username === 'ricardo') {
        res('done');
      } else {
        res('nope');
      }
    }, 1000);
  });
}

interface ILoginForm  extends HTMLFormElement {
  username: HTMLInputElement;
  passpword: HTMLInputElement;
}

interface IResult {
  myKey: string;
  error?: string[];
}

export default Login;