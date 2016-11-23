import MyModel from '../models/MyModel';

class MyController {
    setup(config) {
        Object.assign(this, config);
        this.model = new MyModel();
        this.model.setup(config);
    }
    
    click() {
        this
            .model
            .load()
            .then(data => {
                console.log(data);
            });
    }
}

module.exports = MyController;