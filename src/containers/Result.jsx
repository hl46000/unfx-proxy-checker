import React from 'react';
import { ResultListItemWithSignatures, ResultListItemWithoutSignatures } from '../components/ResultListItem';
import CountrySelect from '../components/CountrySelect';
import { connect } from 'react-redux';
import { save, close, toggleAnon, toggleProtocol, toggleExtra, toggleCountry, onSearchInput, loadMore } from '../actions/ResultActions';
import { getFilteredProxies } from '../store/selectors/getFilteredProxies';

import '../../public/styles/Result.postcss';
import '../../public/styles/icons.postcss';

class Result extends React.PureComponent {
    isMoreAvailable = () => this.props.state.countOfResults < this.props.filteredItems.length;

    render = () => {
        const {
            state: { isOpened, anons, protocols, extra, search, countries, items, countOfResults },
            close,
            save,
            onSearchInput,
            toggleAnon,
            toggleProtocol,
            toggleExtra,
            toggleCountry,
            loadMore,
            filteredItems
        } = this.props;

        const DrawItem = extra.showSignatures ? ResultListItemWithSignatures : ResultListItemWithoutSignatures;

        return (
            <div className={`result-container ${isOpened ? 'opened' : ''}`}>
                <div className="result-content-pre">
                    <div className="result-content">
                        <input type="text" name="search" className="field search" onChange={onSearchInput} value={search} placeholder="Search" />
                        <div className="block middle">
                            <h1 className="title">Anons:</h1>
                            <div className="content">
                                <input className="inp-cbx" id="anon-transparent" type="checkbox" onChange={toggleAnon} name="transparent" checked={anons.transparent} />
                                <label htmlFor="anon-transparent" className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                        </svg>
                                    </span>
                                    <span>Transparent</span>
                                </label>
                                <input className="inp-cbx" id="anon-anonymous" type="checkbox" onChange={toggleAnon} name="anonymous" checked={anons.anonymous} />
                                <label htmlFor="anon-anonymous" className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                        </svg>
                                    </span>
                                    <span>Anonymous</span>
                                </label>
                                <input className="inp-cbx" id="anon-elite" type="checkbox" onChange={toggleAnon} name="elite" checked={anons.elite} />
                                <label htmlFor="anon-elite" className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                        </svg>
                                    </span>
                                    <span>Elite</span>
                                </label>
                            </div>
                        </div>
                        <div className="block middle">
                            <h1 className="title">Protocols:</h1>
                            <div className="content">
                                <input className="inp-cbx" id="protocol-http" type="checkbox" onChange={toggleProtocol} name="http" checked={protocols.http} />
                                <label htmlFor="protocol-http" className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                        </svg>
                                    </span>
                                    <span>Http</span>
                                </label>
                                <input className="inp-cbx" id="protocol-https" type="checkbox" onChange={toggleProtocol} name="https" checked={protocols.https} />
                                <label htmlFor="protocol-https" className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                        </svg>
                                    </span>
                                    <span>Https</span>
                                </label>
                                <input className="inp-cbx" id="protocol-socks4" type="checkbox" onChange={toggleProtocol} name="socks4" checked={protocols.socks4} />
                                <label htmlFor="protocol-socks4" className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                        </svg>
                                    </span>
                                    <span>Socks4</span>
                                </label>
                                <input className="inp-cbx" id="protocol-socks5" type="checkbox" onChange={toggleProtocol} name="socks5" checked={protocols.socks5} />
                                <label htmlFor="protocol-socks5" className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                        </svg>
                                    </span>
                                    <span>Socks5</span>
                                </label>
                            </div>
                        </div>
                        {extra.isEnabled ? (
                            <div className="block middle">
                                <h1 className="title">Extra:</h1>
                                <div className="content">
                                    <input className="inp-cbx" id="extra-keepAlive" type="checkbox" onChange={toggleExtra} name="keepAlive" checked={extra.keepAlive} />
                                    <label htmlFor="extra-keepAlive" className="cbx">
                                        <span>
                                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1" />
                                            </svg>
                                        </span>
                                        <span>Keep-Alive</span>
                                    </label>
                                    <input
                                        className="inp-cbx"
                                        id="extra-showSignatures"
                                        type="checkbox"
                                        onChange={toggleExtra}
                                        name="showSignatures"
                                        checked={extra.showSignatures}
                                    />
                                    <label htmlFor="extra-showSignatures" className="cbx">
                                        <span>
                                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1" />
                                            </svg>
                                        </span>
                                        <span>Show signatures</span>
                                    </label>
                                </div>
                            </div>
                        ) : null}
                        <div className="block large">
                            <h1 className="title">Countries:</h1>
                            <div className="content">
                                <CountrySelect items={countries} toggle={toggleCountry} />
                            </div>
                        </div>
                        <div className="items-counter">
                            <div className="counter">Total: {items.length}</div>
                            <div className="counter">Filtered: {filteredItems.length}</div>
                        </div>
                        <div className={`result-list ${filteredItems.length == 0 ? 'no-results' : ''}`}>
                            {filteredItems.slice(0, countOfResults).map((item, index) => (
                                <DrawItem key={`${item.ip}:${item.port}`} count={index + 1} {...item} />
                            ))}
                        </div>
                        {this.isMoreAvailable() ? (
                            <button className="button-two load-more-button" onClick={loadMore}>
                                Load more
                            </button>
                        ) : (
                            <svg
                                className="bottom-items-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="512px"
                                height="512px"
                                viewBox="0 0 396.821 396.821"
                            >
                                <path d="M394.583,8.054c-0.422-3.413-3.11-6.101-6.522-6.523c-30.748-3.803-62.477-0.488-91.767,9.583c-29.293,10.072-56.355,26.973-78.258,48.876l-49.983,49.983l-72.149,9.305c-1.645,0.212-3.172,0.963-4.345,2.135l-69.563,69.563c-1.969,1.969-2.685,4.868-1.858,7.528c0.825,2.66,3.058,4.643,5.796,5.15l52.597,9.742l10.335,10.335l-22.003,11.915c-2.082,1.127-3.51,3.172-3.851,5.515s0.444,4.709,2.118,6.383l83.438,83.438c1.417,1.417,3.329,2.197,5.304,2.197c0.358,0,0.72-0.026,1.08-0.078c2.343-0.341,4.388-1.769,5.515-3.851l11.916-22.003l10.335,10.335l9.742,52.597c0.508,2.739,2.49,4.971,5.15,5.797c0.731,0.227,1.48,0.337,2.224,0.337c1.96,0,3.876-0.769,5.305-2.197l69.563-69.563c1.172-1.172,1.923-2.7,2.135-4.344l9.306-72.15l49.983-49.984c21.903-21.903,38.804-48.964,48.876-78.257C395.072,70.528,398.385,38.795,394.583,8.054z M79.674,198.355l-36.989-6.851l57.673-57.675l50.332-6.491L79.674,198.355zM152.065,313.268L82.846,244.05l17.085-9.252l61.385,61.386L152.065,313.268z M262.285,295.756l-57.674,57.674l-6.852-36.988l71.017-71.017L262.285,295.756z M325.517,167.471l-135.85,135.85l-96.874-96.874l135.85-135.851c19.738-19.739,44.002-35.076,70.287-44.49c3.395,17.492,11.948,33.719,24.654,46.424c12.705,12.706,28.931,21.259,46.424,24.655C360.593,123.468,345.255,147.732,325.517,167.471z M374.523,82.774c-15.203-2.593-29.345-9.863-40.333-20.85c-10.988-10.987-18.257-25.13-20.85-40.333c21.741-5.859,44.579-7.857,66.99-5.807C382.381,38.195,380.382,61.033,374.523,82.774z" />
                                <path d="M221.325,110.443c-17.74,17.741-17.74,46.606,0,64.347c8.871,8.871,20.521,13.305,32.174,13.305c11.649,0,23.304-4.436,32.173-13.305h0.001c17.74-17.74,17.74-46.606-0.001-64.347C267.931,92.703,239.065,92.704,221.325,110.443z M275.066,164.183c-11.894,11.893-31.244,11.891-43.134,0c-11.893-11.892-11.893-31.242,0-43.134c5.945-5.946,13.756-8.918,21.566-8.918c7.811,0,15.621,2.973,21.566,8.918C286.957,132.941,286.957,152.291,275.066,164.183z" />
                                <path d="M98.365,299.165c-2.93-2.929-7.678-2.929-10.607,0L23.41,363.512c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l64.347-64.347C101.293,306.843,101.293,302.094,98.365,299.165z" />
                                <path d="M108.263,319.671l-28.991,28.991c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l28.991-28.991c2.929-2.929,2.929-7.678,0-10.606C115.941,316.742,111.193,316.742,108.263,319.671z" />
                                <path d="M69.123,361.919c-3.138,0-6.002,2.024-7.062,4.973c-1.078,2.998-0.075,6.441,2.416,8.416c2.547,2.02,6.266,2.13,8.928,0.265c2.84-1.99,3.992-5.81,2.639-9.024C74.931,363.774,72.099,361.919,69.123,361.919z" />
                                <path d="M76.044,366.549C76.234,367,75.864,366.099,76.044,366.549L76.044,366.549z" />
                                <path d="M47.91,380.025l-3.992,3.992c-2.93,2.929-2.93,7.678-0.001,10.607c1.465,1.464,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196l3.992-3.992c2.93-2.929,2.93-7.678,0.001-10.606C55.588,377.099,50.838,377.096,47.91,380.025z" />
                                <path d="M42.502,314.014c-2.93-2.929-7.678-2.929-10.607,0L2.904,343.005c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l28.991-28.991C45.431,321.692,45.431,316.943,42.502,314.014z" />
                                <path d="M54.472,311.136c3.043-0.765,5.327-3.417,5.644-6.537c0.311-3.055-1.369-6.049-4.096-7.427c-2.895-1.464-6.523-0.853-8.769,1.494c-2.405,2.513-2.752,6.426-0.852,9.335c-0.06-0.09-0.106-0.156,0.015,0.029c0.126,0.185,0.083,0.118,0.023,0.029C48.204,310.626,51.429,311.901,54.472,311.136z" />
                                <path d="M73.867,293.257l3.991-3.992c2.929-2.929,2.929-7.678-0.001-10.606c-2.932-2.93-7.681-2.929-10.606,0.001l-3.991,3.992c-2.929,2.929-2.929,7.678,0.001,10.606c1.465,1.464,3.384,2.196,5.303,2.196C70.483,295.454,72.403,294.722,73.867,293.257z" />
                            </svg>
                        )}
                    </div>
                </div>
                <div className="bottom-block">
                    <button className="button-two save-button" onClick={save}>
                        Save
                    </button>
                    <button className="button-two new-check-button" onClick={close}>
                        Close
                    </button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    filteredItems: getFilteredProxies(state),
    state: state.result
});

const mapDispatchToProps = {
    close,
    save,
    onSearchInput,
    toggleAnon,
    toggleProtocol,
    toggleExtra,
    toggleCountry,
    loadMore
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result);
