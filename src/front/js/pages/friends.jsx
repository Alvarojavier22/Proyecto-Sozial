import React from "react";
import { useState } from "react";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { InfoNav } from "../component/InfoNav.jsx";
import "../../styles/index.css";

export const Friends = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="center-container">
        <button
          className="btn btn-primary add-friend-btn"
          variant="outline-primary"
          onClick={handleShow}
        >
          Add Friends
        </button>
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invite your friends to Sozial</h5>
                <button
                  type="button"
                  className="btn btn-danger close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Here's a clickable link to share with your friends:
                    </p>
                    <a
                      href="https://www.sozial.com/invite"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.sozial.com/invite
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
