import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server'; // Update this path according to your project structure
import mongoose from 'mongoose';

chai.use(chaiHttp);
const { expect } = chai;

describe('Portfolio API', () => {
    before(async () => {
        await mongoose.connect('mongodb://localhost:27017/portfolioAPI_test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    after(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    });

    let tradeId;
    const stockSymbol = 'RELIANCE';

    it('should add a new trade', (done) => {
        chai.request(server)
            .post('/portfolio/addTrade')
            .send({
                stockSymbol: stockSymbol,
                type: 'BUY',
                quantity: 100,
                price: 900,
                date: '2015-10-04',
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.success).to.equal(true);
                expect(res.body.data).to.have.property('_id');
                tradeId = res.body.data._id;
                done();
            });
    });

    it('should update a trade', (done) => {
        chai.request(server)
            .post('/portfolio/updateTrade')
            .send({
                tradeId: tradeId,
                stockSymbol: stockSymbol,
                type: 'SELL',
                quantity: 50,
                price: 1000,
                date: '2015-10-05',
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.equal(true);
                expect(res.body.data).to.have.property('_id', tradeId);
                done();
            });
    });

    it('should remove a trade', (done) => {
        chai.request(server)
            .post('/portfolio/removeTrade')
            .send({ tradeId: tradeId })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.equal(true);
                done();
            });
    });

    it('should get holdings', (done) => {
        chai.request(server)
            .get('/portfolio/holdings')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.equal(true);
                expect(res.body.data).to.be.an('array');
                done();
            });
    });

    it('should get cumulative returns', (done) => {
        chai.request(server)
            .get('/portfolio/returns')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.equal(true);
                expect(res.body.data).to.be.a('number');
                done();
            });
    });
});
