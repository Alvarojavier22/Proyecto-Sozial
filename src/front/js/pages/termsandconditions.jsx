import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const TermsAndConditions = () => {
  const [isRead, setIsRead] = useState(false);
  const handleDecline = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="container my-5">
      <div className="card border-primary">
        <div className="card-header bg-primary text-white">
          Sozial: Terms, Conditions & Privacy Policy
        </div>
        <div className="card-body">
          <p className="card-text">
            Welcome to Sozial, a social media app that also includes a selling
            marketplace. In order to use Sozial, you must agree to the
            following terms and conditions.
          </p>
          <h5>Eligibility</h5>
          <p className="card-text">
            To use Sozial, you must be at least 12 years old. If you are under
            12 years old, you are not eligible to use Sozial.
          </p>
          <h5>Prohibited Content</h5>
          <p className="card-text">
              Sozial prohibits any content that is illegal, harmful,
              threatening, abusive, harassing, defamatory, vulgar, obscene,
              pornographic, hateful, racist, sexist, or otherwise offensive.
              This includes, but is not limited to, text, images, and videos.
              Sozial also prohibits the sale or promotion of illegal items or
              services.
            </p>
            <h5>User Responsibility</h5>
            <p className="card-text">
              You are solely responsible for the content that you post on
              Sozial. You must not use Sozial to infringe on the rights of
              others, including but not limited to, intellectual property
              rights, privacy rights, or any other legal rights.
            </p>
            <h5>Account Termination</h5>
            <p className="card-text">
              Sozial reserves the right to terminate your account if you violate
              any of these terms and conditions, or if you engage in any
              inappropriate behavior.
            </p>
            <h5>Disclaimer</h5>
            <p className="card-text">
              Sozial is not responsible for the content posted by its users, and
              it does not endorse or guarantee the accuracy of any content
              posted by its users. Sozial is also not responsible for any
              transactions that occur between users in the selling marketplace.
            </p>
            <h2 className="text-center mt-5">Sozial Privacy Policy</h2>
            <p>
              Sozial is committed to protecting the privacy of its users. This
              Privacy Policy outlines how we collect, use, and protect your
              personal information.
            </p>
            <h3>Information Collection</h3>
            <p>
              Sozial collects information from its users in order to provide a
              better user experience. When you create an account, post content,
              or participate in the selling marketplace. This information may
              include your name, email address, and other personal information.
            </p>
            <h3>Information Use</h3>
            <p>
              Sozial uses the information that you provide to us to provide the
              services offered on the app, to improve the user experience, and
              to send you updates and promotional materials. Sozial will never
              sell or share your personal information with third parties for
              their own marketing purposes.
            </p>
            <h3>Data Retention</h3>
            <p>
              Sozial retains your personal information for as long as your
              account is active or as needed to provide you with the services
              offered on the app. If you delete your account, Sozial will remove
              your personal information from its servers, but some information
              may remain in backup copies for a limited time.
            </p>
            <h3>Data Security</h3>
            <p>
              Sozial takes reasonable measures to protect your personal
              information from unauthorized access, use, or disclosure. However,
              no system can be 100% secure, and Sozial cannot guarantee the
              security of your personal information.
            </p>
            <h3>Changes to Privacy Policy</h3>
            <p>
              Sozial may update this Privacy Policy from time to time. If we
              make any changes to this Privacy Policy, we will notify you by
              posting the updated policy on the app.
            </p>

            <p>
              By using Sozial, you agree to this Privacy Policy. If you have any
              questions or concerns about our Privacy Policy, please contact us
              at support@sozialapp.com(Fake company email presentation only).
            </p>
            <div className="d-flex justify-content-between">
        <Link to="/signup">
          <button className="btn btn-danger">Decline</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-success">MARK AS READ</button>
        </Link>
      </div>
          </div>
        </div>
      </div>
    );
  };



