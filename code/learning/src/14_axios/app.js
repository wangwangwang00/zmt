import React, { PureComponent } from "react";
import axios from "axios";

export default class app extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>PP</div>;
  }
  componentDidMount() {

    const instance1 = axios.create({
      baseURL:"http://httpbin.org",
      timeout:5000
    })

    const instance2 = axios.create({
      baseURL:"http//mounsey.xyz",
      timeout:5000,
      header:{
        
      }
    })

    axios.interceptors.request.use(config => {
      // 1、发送网络请求时，显示loading
      // 2、某一些请求要求用户携带token，如果没有携带，调转到登录页面
      // 3、params/data序列化操作
      console.log("请求拦截");
      return config;
    },err => {
      

    })


    axios.interceptors.response.use(res => {
      return res.data;
    },err => {
      if(err && err.response){
        switch (err.response.status){
          case 400:
            console.log("请求错误")
            break;
          case 401:
            console.log("未授权访问");
            default:
              console.log("其他错误");
        }
        return err;
      }
    })
    axios({
      url: "/get",
      params: {
        name: "mounsey",
        age: 18,
      },
      method: "get",
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('promise1');
    //   }, 1000);
    // })

    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise2");
    //   }, 3000);
    // })

    // Promise.all([promise1,promise2]).then((res) => {
    //   console.log(res);
    // })
    // const requst1 = axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "mounsey",
    //     age: 18,
    //   },
    //   method: "get",
    // });
    // const requst2 = axios({
    //   url: "http://httpbin.org/post",
    //   params: {
    //     name: "lucy",
    //     age: 16,
    //   },
    //   method: "post",
    // });
    // axios
    //   .all([requst1, requst2])
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  //   async componentDidMount() {
  //       try{
  //         const result = await axios({
  //             url:"http://httpbin.org/get",
  //             params:{
  //                 name:"mounsey",
  //                 age:18
  //             },
  //             method:"get"
  //         })
  //         console.log(result);
  //       } catch(err){
  //           console.log(err);
  //       }

  //     // axios({
  //     //   url: "http://httpbin.org/get",
  //     //   params: {
  //     //     name: "mounsey",
  //     //     age: 18,
  //     //   },
  //     // }).then((res) => {
  //     //     console.log(res);
  //     //   }).catch((err) => {
  //     //     console.log(err);
  //     //   });

  //     // axios({
  //     //   url: "http://httpbin.org/post",
  //     //   data: {
  //     //     name: "lily",
  //     //     age: 40,
  //     //   },
  //     //   method: "post",
  //     // }).then((res) => {
  //     // console.log(res);
  //     // }).catch((err) => {
  //     // console.log(err);
  //     // });
  //   }
}
