import { h } from 'preact';
import moment from "moment";
import Styles from "./styles.module.scss";
import parse from 'html-react-parser';
import.meta.env.SSR;

function logHtml() {
  // Note: rewrite "[dot]" to "." for this to to work in your project.
  return import.meta.env.SSR ? <div class="spinner"></div> : parse(log.astro.html);
}

function DiaryLog({ log }) {
  // const logHtml = parse(log.astro.html);
  const logHtmlcomponenet = logHtml();
  return (
    <div className={Styles.card}>
      <div className={Styles.cardTitle}>
        <h2 className="mt1 mb1">{log.title}</h2>
        <small>{moment(log.publishDate).fromNow()}</small>
      </div>
      <div>{logHtmlcomponenet}</div>
    </div>
  );
}

export default DiaryLog;
