import React, { PureComponent } from 'react';

export class NotFound extends PureComponent {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center mt-5 pt-5">
                            <h1 className="glitch" data-text="404!">
                                404!
                            </h1>
                            <h3 className="heading">
                                The page you are looking for cannot be found
                            </h3>
                            <p className="paragraph">
                                Please check the url and be sure you are requesting an existing page.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
