import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          list: {"datas":[{"name":"规格测试店","lng":"119.243195","lat":"26.088528","max_length":"6.00","lsprice":"0.01","sprice":"[{&quot;total&quot;:&quot;0.01&quot;,&quot;price&quot;:&quot;0&quot;}]","logo":"\/1\/Logo\/2017\/08\/23\/599d1c93c978c.jpg","bstatus":"1","ws_id":"39","goods":[{"id":"188","ws_goods_id":"221","amount":"2","ws_id":"39","crtime":"1512027740","goods_info":{"id":"221","name":"精选套餐1","format":"测试","price":"2.00","relate_id":"0","warn_amount":"10","amount":"97","sold_amount":"25","category_id":"68","brand_id":"22","json_img":"[\"\/39\/Item\/2017\/11\/02\/59fadb6a4502f.jpg\"]","cprice":"1.00","mprice":"2.00","status":"1","barcode":"12312412","ws_id":"39","oprice":"12.00"},"is_failure":false},{"id":"185","ws_goods_id":"216","amount":"3","ws_id":"39","crtime":"1512027729","goods_info":{"id":"216","name":"RIO鸡尾酒","format":"草莓味","price":"0.01","relate_id":"0","warn_amount":"10","amount":"72","sold_amount":"38","category_id":"68","brand_id":"22","json_img":"[\"\/1\/Item\/2017\/09\/07\/59b0be9d73b45.jpg\"]","cprice":"0.00","mprice":"0.00","status":"1","barcode":"0","ws_id":"39","oprice":"0.01"},"is_failure":false},{"id":"189","ws_goods_id":"220","amount":"1","ws_id":"39","crtime":"1512026892","goods_info":{"id":"220","name":"芦柑","format":"芦柑果汁饮料","price":"1.00","relate_id":"0","warn_amount":"10","amount":"100","sold_amount":"100","category_id":"68","brand_id":"23","json_img":"[\"\/39\/Item\/2017\/11\/02\/59face115d744.jpg\"]","cprice":"0.00","mprice":"0.00","status":"1","barcode":"0","ws_id":"39","oprice":"1.00"},"is_failure":false},{"id":"187","ws_goods_id":"222","amount":"1","ws_id":"39","crtime":"1512026890","goods_info":{"id":"222","name":"精选套餐2","format":"12瓶","price":"0.01","relate_id":"0","warn_amount":"10","amount":"97","sold_amount":"3","category_id":"68","brand_id":"22","json_img":"[\"\/39\/Item\/2017\/11\/02\/59fadb9c598c2.png\"]","cprice":"0.01","mprice":"0.01","status":"1","barcode":"0","ws_id":"39","oprice":"0.01"},"is_failure":false},{"id":"186","ws_goods_id":"225","amount":"1","ws_id":"39","crtime":"1512026888","goods_info":{"id":"225","name":"芦柑","format":"228","price":"0.01","relate_id":"0","warn_amount":"5","amount":"92","sold_amount":"8","category_id":"68","brand_id":"21","json_img":"[\"\/1\/Item\/2017\/11\/03\/59fbe293ec0aa.jpg\"]","cprice":"0.00","mprice":"0.00","status":"1","barcode":"0","ws_id":"1"},"is_failure":false}]},{"name":"乐宝超市","lng":"119.280558","lat":"26.041636","max_length":"8.00","lsprice":"0.01","sprice":"[{&quot;total&quot;:&quot;0.01&quot;,&quot;price&quot;:&quot;0.01&quot;},{&quot;total&quot;:&quot;0.02&quot;,&quot;price&quot;:&quot;0&quot;}]","logo":"\/32\/Logo\/2017\/09\/26\/59c9fd1478bf7.jpg","bstatus":"1","ws_id":"32","goods":[{"id":"184","ws_goods_id":"206","amount":"1","ws_id":"32","crtime":"1512026877","goods_info":{"id":"206","name":"精选套餐4","format":"250","price":"0.01","relate_id":"0","warn_amount":"5","amount":"2","sold_amount":"12","category_id":"46","brand_id":"18","json_img":"[\"\/1\/Item\/2017\/07\/27\/59799de9a56d5.jpg\"]","cprice":"0.00","mprice":"0.00","status":"1","barcode":"0","ws_id":"32","oprice":"0.01"},"is_failure":false},{"id":"182","ws_goods_id":"224","amount":"1","ws_id":"32","crtime":"1512026876","goods_info":{"id":"224","name":"仙草蜜","format":"248克","price":"0.01","relate_id":"0","warn_amount":"50","amount":"76","sold_amount":"124","category_id":"46","brand_id":"21","json_img":"[\"\/1\/Item\/2017\/11\/27\/5a1bd72a4e566.png\"]","cprice":"0.00","mprice":"0.00","status":"1","barcode":"6921489033966","ws_id":"32","oprice":"0.01"},"is_failure":false},{"id":"183","ws_goods_id":"207","amount":"1","ws_id":"32","crtime":"1512026876","goods_info":{"id":"207","name":"精选套餐5","format":"125","price":"14.00","relate_id":"0","warn_amount":"8","amount":"8","sold_amount":"0","category_id":"46","brand_id":"1","json_img":"[\"\/1\/Item\/2017\/07\/27\/59799e0fed7eb.jpg\"]","cprice":"0.00","mprice":"0.00","status":"1","barcode":"0","ws_id":"32","oprice":"14.00"},"is_failure":false},{"id":"181","ws_goods_id":"238","amount":"1","ws_id":"32","crtime":"1512026874","goods_info":{"id":"238","name":"大水壶","format":"个","price":"5.68","relate_id":"0","warn_amount":"1","amount":"7","sold_amount":"4","category_id":"46","brand_id":"20","json_img":"[\"\/32\/Item\/2017\/11\/13\/5a0952bf1f85d.png\"]","cprice":"3.66","mprice":"5.68","status":"1","barcode":"626666666666","ws_id":"32","oprice":"3.66"},"is_failure":false},{"id":"180","ws_goods_id":"32","amount":"2","ws_id":"32","crtime":"1512026864","goods_info":{"id":"32","name":"小熊饼干","format":"350","price":"15.00","relate_id":"0","warn_amount":"10","amount":"500","sold_amount":"23","category_id":"46","brand_id":"18","json_img":"[\"\/32\/Item\/2017\/07\/25\/5976ef5cbbfb6.jpg\",\"\/1\/Item\/2017\/07\/26\/597810fc6c467.jpg\"]","cprice":"0.00","mprice":"0.00","status":"1","barcode":"0","ws_id":"32","oprice":"15.00"},"is_failure":false},{"id":"179","ws_goods_id":"33","amount":"1","ws_id":"32","crtime":"1512026862","goods_info":{"id":"33","name":"苹果8","format":"400","price":"20.00","relate_id":"0","warn_amount":"10","amount":"294","sold_amount":"6","category_id":"46","brand_id":"19","json_img":"[\"\/1\/Item\/2017\/07\/25\/5976f7aa0541b.png\"]","cprice":"0.00","mprice":"0.00","status":"1","barcode":"0","ws_id":"32","oprice":"20.00"},"is_failure":false}]}]}
        }
    }
    componentDidMount() {
     const list =  this.state.list.datas.map(item => {
           item.store_check = true;
           item.goods.map(item1 => {
            item1.goods_info.goods_check = true
           })
           return item
       })
       console.log(list)
       let obj = {
           "datas": list
       }
       this.setState({
        list: obj
      });
    }
    // 店铺选择
    calute_store(id,storeCheck,item) {
        const {datas: storeList} = this.state.list
        //  console.log(id,storeCheck,item)
        let array = [];
        if (storeCheck) {
            item.store_check = storeCheck
            item.goods.forEach(element => {
            element.goods_info.goods_check = storeCheck      
            });
        }else {
            item.store_check = storeCheck
            item.goods.forEach(element => {
            element.goods_info.goods_check = storeCheck      
            });
        }
    
        let index = storeList.findIndex(item => item.ws_id == id)
        storeList[index] = item;

        let obj = {
            "datas": storeList
        }
        this.setState({
            list: obj
        },() => {
            console.log(storeList)
        });
    }
    // 商品选择
    calute_goods(id,goodsCheck,storeItem,goodsItem) {
         const {datas: storeList} = this.state.list
         const {goods} = storeItem;
         const goodsIndex = goods.findIndex(item => item.goods_info.id == id);
         const storeIndex = storeList.findIndex(item => item.ws_id == storeItem.ws_id)
         goods[goodsIndex]['goods_info']['goods_check'] = goodsCheck
         storeItem.store_check = this.allCheck(goods)
        storeList[storeIndex] =  storeItem
         let obj = {
          "datas": storeList
        }
        this.setState({
            list: obj
        },() => {
            console.log(storeList)
        });
    }
    // 全选
    allCheck(array) {
       for (let iterator of array) {
           if (!iterator.goods_info.goods_check) return false
       }
       return true
    }
    render() {
        // console.log(this.state.list.datas)
        return (
            <div className="test">
               {
                   this.state.list.datas &&  this.state.list.datas.length > 0 &&
                   this.state.list.datas.map((item,storeIndex) => 
                     <div className="store" style={{marginTop: '30px'}} key={item.ws_id}>
                       <input type="checkbox" className="store-check" onChange={() => this.calute_store(item.ws_id,!item.store_check,item)} checked={item.store_check | false}  />
                       {item.ws_id} {item.store_check}
                       <br/>
                       {
                        item.goods.map((item1,goodsIndex) => 
                          <div className="goods" style={{marginLeft: '30px',marginBottom: '15px'}} key={item1.goods_info.id} >
                          <input type="checkbox" className="goods-check" onChange={() => this.calute_goods(item1.goods_info.id,!item1.goods_info.goods_check,item,item1)} checked={item1.goods_info.goods_check | false}  />
                          {item1.goods_info.id} {item1.goods_info.goods_check}
                           </div>
                         )
                       }
                    </div>
                   )
               }
              
            </div>
        );
    }
}

Checkbox.propTypes = {

};

export default Checkbox;