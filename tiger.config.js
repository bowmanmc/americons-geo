
// Tiger shape files downloaded from: http://www2.census.gov/geo/tiger/GENZ2015/shp/
// low resolution: 20m
// med resolution: 5m
//  hi resolution: 500k

module.exports = {
    files: [{
        name: 'states-hi',
        filename: 'cb_2015_us_state_500k'
    }, {
        name: 'states-med',
        filename: 'cb_2015_us_state_5m'
    }, {
        name: 'states-low',
        filename: 'cb_2015_us_state_20m'
    }, {
        name: 'nation',
        filename: 'cb_2015_us_nation_5m'
    }]
};
