import React from 'react';
import { toast } from 'react-toastify';

const ProductReviewForm = () => {

    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Review")
    }

    return (
        <>
            <form className="contact-form" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" autoComplete='off' required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            Post Review
                        </button>
                    </div>
                </div>
                <div className="col-md-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                </div>
            </form>
        </>
    );
};

export default ProductReviewForm;