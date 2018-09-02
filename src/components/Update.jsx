import React from 'react';
import { connect } from 'react-redux';
import { checkAtAvailable, close, download } from '../actions/UpdateActions';

import '../../public/styles/Update.postcss';

class Update extends React.PureComponent {
    componentWillMount = () => {
        const { checkAtAvailable } = this.props;
        checkAtAvailable();
    }

    render = () => {
        const {
            isOpened,
            isAvailable,
            isChecking,
            onDownloading,
            downloadProgress,
            info,
        } = this.props.state;
        
        const { close, download } = this.props;

        const progress = { width: downloadProgress + '%' };

        return (
            <div className={isOpened ? onDownloading ? 'update-notify downloading' : isChecking ? 'update-notify checking' : 'update-notify' : 'update-notify closed'}>
                <div className="lds-ripple"><div></div><div></div></div>
                {
                    isAvailable ?
                    <div className="update-container">
                        <div className="update-content">
                            <div className="update-version">
                                Available version: {info.latest}
                            </div>
                            <div className="update-description">
                                {info.description}
                            </div>
                            <div className="update-features">
                                {info.features.map((item, index) => <div className="feature-item" key={index}><div className="feature-name">{item.name}</div><div className="feature-description">{item.description}</div></div>)}
                            </div>
                        </div>
                        <div className="update-download">
                            <button onClick={() => download('x32')}>Download x32</button>
                            <button onClick={() => download('x64')}>Download x64</button>
                        </div>
                        <button onClick={close}>Ok</button>
                    </div>
                    : ""
                }
                {
                    onDownloading ?
                    <div className="download-progress">
                        <div className="download-progress-bar" style={progress}></div>
                    </div>
                    : ""
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.update
});

const mapDispatchToProps = {
    checkAtAvailable,
    close,
    download
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
