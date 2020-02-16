import React, { Component } from "react";
import axios from "axios";

export default class SiteManagerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteItem: {}
    };
  }

  componentWillMount() {
    this.getSiteItem();
  }

  getSiteItem() {
    axios
      .get(
        `http://127.0.0.1:8000/api_sandwhiches/${
          this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          siteItem: response.data.site_item
        });
      })
      .catch(error => {
        console.log("getSiteItem error", error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.siteItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };

    const logoStyles = {
      width: "200px"
    };

    return (
      <div className="site-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="site-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}