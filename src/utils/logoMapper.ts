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
import FlaskLogo from '../assets/icons/flask.png';
import TailwindLogo from '../assets/svg/tailwind-css-svgrepo-com.svg';
import PostgresLogo from '../assets/svg/Postgresql_elephant.svg.png';
import ExpressLogo from '../assets/svg/icons8-express-js.svg';
import UnityLogo from '../assets/svg/unity-svgrepo-com.svg';
import UnrealLogo from '../assets/svg/icons8-unreal-engine.svg';
import BlenderLogo from '../assets/svg/icons8-blender.svg';
import ShellLogo from '../assets/svg/command-prompt-svgrepo-com.svg';
import CsharpLogo from '../assets/svg/csharp.svg';
import RedisLogo from '../assets/svg/redis-logo-svgrepo-com.svg';
import FallbackLogo from '../assets/svg/react.svg';
import AzureLogo from '../assets/svg/azure.png';
import KubernetesLogo from '../assets/svg/kubernettes.png';
import Neo4jLogo from '../assets/svg/neo4j.png';
import KafkaLogo from '../assets/svg/kafka.svg';
import LlamaIndexLogo from '../assets/svg/llama.png';
import NPMLogo from '../assets/svg/npm-logo.png';
import DockerLogo from '../assets/svg/docker.svg';
import RustLogo from '../assets/svg/rust.png';
import ExpoLogo from '../assets/svg/expo.png';
import PiclistLogo from '../assets/logos/piclist.webp';

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
  tailwindcss: TailwindLogo,
  postgresql: PostgresLogo,
  express: ExpressLogo,
  unity: UnityLogo,
  "unreal-engine": UnrealLogo,
  blender: BlenderLogo,
  shell: ShellLogo,
  csharp: CsharpLogo,
  redis: RedisLogo,
  blank: FallbackLogo,
  azure: AzureLogo,
  "kubernetes": KubernetesLogo,
  neo4j: Neo4jLogo,
  kafka: KafkaLogo,
  "llama-index": LlamaIndexLogo,
  npm: NPMLogo,
  docker: DockerLogo,
  rust: RustLogo,
  expo: ExpoLogo,
  piclist: PiclistLogo
};

export const getLogoImage = (technology: string): string => {
  return logoMap[technology.toLowerCase()] || FallbackLogo;
};

export default getLogoImage; 