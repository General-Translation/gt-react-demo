import Image from "next/image";
import Link from "next/link";

import { I18N, Private, Numeric, Branch, Variable, intl, GTProvider } from "gt-react/next";
import DemoComponent from "@/components/demo/DemoComponent";
import DemoExample from "@/components/demo/DemoExample";
import DemoCode from "@/components/demo/DemoCode";

import Counter from "@/components/client/Counter";
import NameAndGender from "@/components/client/NameAndGender";

export default async function Page() {
  return (
    <main className="flex flex-col items-center p-16">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-green-900 after:dark:via-green after:dark:opacity-40 before:lg:h-[360px] z-[-1] cursor:pointer">
      </div>

      <p>
        <Link target="_blank" href="https://www.generaltranslation.com">
            <Image
              src="/invisblack.png"
              alt="GT Logo"
              className="dark:invert"
              width={45}
              height={45}
              priority
            />
        </Link>
      </p>

      <h2 className="text-center p-8 text-3xl font-semibold tracking-tight">
        <I18N><code>gt-react</code> Demo</I18N>
      </h2>

      <div className="p-4 w-[90%] max-w-[450px]">
        <I18N id='pitch'>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          <b><code>gt-react</code> is an internationalization library for people who move fast and break things. </b>
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          It's add and go. No need to hire translators, no worrying about which languages you support.
          When you <code>npm install gt-react</code>, your app supports them all.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Unlike other internationalization libraries, <code>gt-react</code> translates entire React components. 
          So you don't have to worry about translating in context. And you don't need to change your site structure to accomodate it.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Engineers shouldn't have to worry about I18N. So don't. Install <code>gt-react</code>.
        </p>
        </I18N>
      </div>

      <div className="p-4 w-[90%] max-w-[450px]">
        <I18N id='examples'>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Examples
          </h4>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            To see <code>gt-react</code> in action, change your browser language and reload the page. The new language should load in seamlessly. When encountering a new language for the first time, content is displayed in the default language (in this case, English) while the translation loads.
          </p>
        </I18N>
      </div>

      <DemoComponent>
          <I18N id='intro1'><p className="leading-7 [&:not(:first-child)]:mt-3">
            It works for simple text, or complex nested tags:
          </p></I18N>
          <DemoExample>
            <I18N>
              <b>John's</b> happy <i>customer</i>.
            </I18N>
          </DemoExample>
          <DemoCode title={await intl("See code")}>
            {
              `import { I18N } from 'gt-react/next'\n\n` +
              `function Example() {\n` +
              `\treturn (\n` +
              `\t\t<I18N>\n` +
              `\t\t\t<b>John's</b> happy <i>customer</i>.\n` +
              `\t\t</I18N>\n` +
              `\t);\n` +
              `}`
            }
          </DemoCode>
      </DemoComponent>

      <DemoComponent>
          <I18N id='intro2'><p className="leading-7 [&:not(:first-child)]:mt-3">
            Text which shouldn't be translated can be left out, or marked as private.
          </p></I18N>
          <DemoExample>
            <I18N>
              <p>This text should be translated.</p>
              <Private><p>This text should <b>not</b> be translated!</p></Private>
            </I18N>
          </DemoExample>
          <DemoCode title={await intl("See code")}>
            {
              `import { I18N, Private } from 'gt-react/next'\n\n` +
              `function Example() {\n` +
              `\treturn (\n` +
              `\t\t<I18N>\n` +
              `\t\t\t<p>This text should be translated!</p>\n` +
              `\t\t\t<Private>\n` +
              `\t\t\t\t<p>This text should <b>not</b> be translated!</p>\n` +
              `\t\t\t</Private>\n` +
              `\t\t</I18N>\n` +
              `\t);\n` +
              `}`
            }
          </DemoCode>
      </DemoComponent>

      <DemoComponent>
          <I18N id='intro3'><p className="leading-7 [&:not(:first-child)]:mt-3">
            Numbers work perfectly, including in languages where there are complex number forms, like duals, which don't exist in English.
          </p></I18N>
          <DemoExample>
            <GTProvider dictionary = {{
                "counter.singular": <>You have a single new message!</>,
                "counter.zero": <>You have no new messages!</>,
                "counter.default": <>You have <Variable name="n"></Variable> new messages!</>,
                "counter.dual": <>You have exactly two new messages.</>,
                "add": <>Add</>,
                "subtract": <>Subtract</>
            }} >
              <Counter />
            </GTProvider>
          </DemoExample>
          <br/>
          <Link target="_blank" className="font-medium text-primary underline underline-offset-4" href='https://github.com/General-Translation/gt-react-demo/blob/main/src/components/client/Counter.js'>{await intl("See code")}</Link>
      </DemoComponent>

      <DemoComponent>
          <I18N id='intro4'><p className="leading-7 [&:not(:first-child)]:mt-3">
            Non-number variables are also easy to add and translate around.
          </p></I18N>
          <DemoExample>
            <GTProvider dictionary = {{
                "customer.male": <>His name is <Variable name="name"></Variable>.</>,
                "customer.female": <>Her name is <Variable name="name"></Variable>.</>,
                "customer.default": <>Their name is <Variable name="name"></Variable>.</>,
                "male": "Male",
                "female": "Female",
                "other": "Other",
                "prefer not to say": "I'd prefer not to say",
                "gender.selector": "Gender...",
                "name.input": "Name..."
            }}>
                <NameAndGender />
            </GTProvider>
          </DemoExample>
          <br/>
          <Link target="_blank" className="font-medium text-primary underline underline-offset-4" href='https://github.com/General-Translation/gt-react-demo/blob/main/src/components/client/NameAndGender.js'>{await intl("See code")}</Link>
      </DemoComponent>
      
    </main>
  );
}
