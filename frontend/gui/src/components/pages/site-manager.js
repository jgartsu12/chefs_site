import React, { Component } from "react";
import axios from "axios";

import SiteManagerSidebarList from "../site-manager/site-sidebar-list";
import SiteManagerForm from "../site-manager/site-form";

export default class SiteManager extends Component {
  constructor() {
    super();

    this.state = {
      siteManagerItems: [],
      siteToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearSiteToEdit = this.clearSiteToEdit.bind(this);
  }

  clearSiteToEdit() {
    this.setState({
      siteToEdit: {}
    });
  }

  handleEditClick(siteManagerItem) {
    this.setState({
      siteToEdit: siteManagerItem
    });
  }

  handleDeleteClick(siteManagerItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          siteManagerItems: this.state.siteManagerItems.filter(item => {
            return item.id !== siteManagerItem.id;
          })
        });

        return response.data;
      })
      .catch(error => {
        console.log("handleDeleteClick error", error);
      });
  }

  handleEditFormSubmission() {
    this.getSiteManagerItems();
  }

  handleNewFormSubmission(siteManagerItem) {
    this.setState({
      siteManagerItems: [siteManagerItem].concat(this.state.siteManagerItems)
    });
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError error", error);
  }

  getSiteManagerItems() {
    axios
      .get(
        "https://johncgartsu.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        {
          withCredentials: true
        }
      )
      .then(response => {
        this.setState({
          siteManagerItems: [...response.data.site_manager_items]
        });
      })
      .catch(error => {
        console.log("error in getSiteManagerItems", error);
      });
  }

  componentDidMount() {
    this.getSiteManagerItems();
  }

  render() {
    return (
      <div className="site-manager-wrapper">
        <div className="left-column">
          <SiteManagerForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearSiteToEdit={this.clearSiteToEdit}
            siteToEdit={this.state.siteToEdit}
          />
        </div>

        <div className="right-column">
          <SiteManagerSidebarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.siteManagerItems}
            handleEditClick={this.handleEditClick}
          />
        </div>
      </div>
    );
  }
}