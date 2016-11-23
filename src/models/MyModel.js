class MyModel {
    setup(config) {
        Object.assign(this, config);
    }

    load(config) {
        const httpConfig = {
            url: this.endpoint
        };
        Object.assign(httpConfig, config);
        if (!this.http) {
            return new Promise((resolve, reject) => {
                reject(new Error('Model require to setup the http dependency to connect the server to fetch data.'));
            });
        } else if (!this.endpoint) {
            return new Promise((resolve, reject) => {
                reject(new Error('Model requires an endpoint to connect to the server to fetch data.'));
            });
        }
        
        if(!this.parseData) {
            this.parseData = data => data;
        }
        
        return this
            .http(httpConfig)
            .then(this.parseData);
    }
}