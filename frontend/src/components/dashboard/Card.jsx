/*card component*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Card({ data }) {

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${data.colors} shadow h-100 py-4`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-4">
                            <div className={`text-xs font-weight-bold text-${data.colors} text-uppercase mb-4`}>
                                {data.title}</div>
                            <div className="h5 mb-3 ml-3 font-weight-bold text-gray-800">{data.count}</div>
                        </div>
                        <div className="col-auto mr-5">
                            <FontAwesomeIcon icon={data.icon} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}