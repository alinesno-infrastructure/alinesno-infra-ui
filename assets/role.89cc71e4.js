import{K as t}from"./index.587e79da.js";function l(e){return t({url:"/system/role/list",method:"get",params:e})}function u(e){return t({url:"/system/role/"+e,method:"get"})}function o(e){return t({url:"/system/role",method:"post",data:e})}function n(e){return t({url:"/system/role",method:"put",data:e})}function d(e){return t({url:"/system/role/dataScope",method:"put",data:e})}function c(e,r){return t({url:"/system/role/changeStatus",method:"put",data:{roleId:e,status:r}})}function m(e){return t({url:"/system/role/"+e,method:"delete"})}function h(e){return t({url:"/system/role/authUser/allocatedList",method:"get",params:e})}function i(e){return t({url:"/system/role/authUser/unallocatedList",method:"get",params:e})}function p(e){return t({url:"/system/role/authUser/cancel",method:"put",data:e})}function f(e){return t({url:"/system/role/authUser/cancelAll",method:"put",params:e})}function y(e){return t({url:"/system/role/authUser/selectAll",method:"put",params:e})}function U(e){return t({url:"/system/role/deptTree/"+e,method:"get"})}export{h as a,p as b,f as c,y as d,m as e,c as f,u as g,n as h,o as i,d as j,U as k,l,i as u};
