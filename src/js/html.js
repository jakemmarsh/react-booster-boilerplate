import React from 'react';

class Html extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>React Booster Boilerplate</title>
          {this.renderStyleLinks()}
        </head>
        <body>
          {this.renderChildren()}
          {this.renderScriptTags()}
        </body>
      </html>
    );
  }

  renderStyleLinks() {
    const { styles } = this.props.assets;

    Object.keys(styles).map((styleKey, index) => {
      return (
        <link
          key={index}
          rel="stylesheet"
          href={styles[styleKey]} />
      );
    });
  }

  renderChildren() {
    return React.Children(this.props.children).map((child) => {
      return React.cloneElement(child, this.props);
    });
  }

  renderScriptTags() {
    const { javascript } = this.props.assets;

    return Object.keys(javascript).map((scriptKey, index) => {
      return (
        <script src={javascript[scriptKey]} key={index} />
      );
    });
  }
}

Html.propTypes = {
  assets: React.PropTypes.object
};

export default Html;
