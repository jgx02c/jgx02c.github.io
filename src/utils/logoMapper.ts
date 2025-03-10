import ReactLogo from '../assets/svg/react.svg';
import ViteLogo from '../assets/svg/vite.svg';
import TypescriptLogo from '../assets/svg/typescript.svg';
import ScssLogo from '../assets/svg/scss.svg';
import AwsLogo from '../assets/svg/aws.svg';
import CssLogo from '../assets/svg/css.svg';
import DjangoLogo from '../assets/svg/django.svg';
import HtmlfiveLogo from '../assets/svg/htmlfive.svg';
import JavascriptLogo from '../assets/svg/javascript.svg';
import MysqlLogo from '../assets/svg/mysql.svg';
import LangChainLogo from '../assets/svg/langchain-seeklogo.svg';
import NodejsLogo from '../assets/svg/nodejs.svg';
import ShopifyLogo from '../assets/svg/shopify.svg';
import NextLogo from '../assets/svg/next-js.svg';
import FastLogo from '../assets/svg/fastapi.svg';
import OpenAI from '../assets/svg/openai.svg';
import CplusplusLogo from '../assets/svg/cplusplus.svg';
import MongodbLogo from '../assets/svg/mongodb.svg';
import PythonLogo from '../assets/svg/python.svg';
import FlaskLogo from '../assets/flask.png';
import Blank from '../assets/blank.png';

interface LogoMap {
  [key: string]: string;
}

const logoMap: LogoMap = {
  react: ReactLogo,
  vite: ViteLogo,
  typescript: TypescriptLogo,
  scss: ScssLogo,
  aws: AwsLogo,
  css: CssLogo,
  django: DjangoLogo,
  htmlfive: HtmlfiveLogo,
  javascript: JavascriptLogo,
  mysql: MysqlLogo,
  langchain: LangChainLogo,
  nodejs: NodejsLogo,
  shopify: ShopifyLogo,
  "next-js": NextLogo,
  fastapi: FastLogo,
  openai: OpenAI,
  cplusplus: CplusplusLogo,
  mongodb: MongodbLogo,
  python: PythonLogo,
  flask: FlaskLogo,
  blank: Blank
};

export const getLogoImage = (technology: string): string => {
  return logoMap[technology] || Blank;
};

export default getLogoImage; 