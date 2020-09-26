import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import Subscribe from '../components/subscribe';
import {htmlToReact, safePrefix} from '../utils';
import { Disqus, CommentCount } from "gatsby-plugin-disqus";

export default class Post extends React.Component {
    render() {
      const url = "https://nabendu.blog";
      const siteTitle = _.get(this.props, 'pageContext.site.siteMetadata.title');
      const blogIdentity = this.props.location.pathname.split("/")[2];
      console.log(blogIdentity);
      let disqusConfig = {
        url: `${url}${this.props.location.pathname}`,
        identifier: blogIdentity,
        title: siteTitle,
      }
        return (
            <Layout {...this.props}>
              <article className="post post-full">
                <CommentCount config={disqusConfig} placeholder={'...'} />
                <header className="post-header">
                  <h1 className="post-title underline">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                </header>
                {_.get(this.props, 'pageContext.frontmatter.subtitle') &&
                <div className="post-subtitle">
                  {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                </div>
                }
                {_.get(this.props, 'pageContext.frontmatter.content_img_path') &&
                <div className="post-thumbnail">
                  <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                </div>
                }
                <div className="post-content">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
                <footer className="post-meta">
                  <time className="published"
                    dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%A, %B %e, %Y')}</time>
                </footer>
              </article>
              <Subscribe heading={true} />
              <Disqus config={disqusConfig} />
            </Layout>
        );
    }
}
