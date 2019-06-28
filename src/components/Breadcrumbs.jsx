import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Example = (props) => {
console.log(props.crumbs)
  return (
    <div style={{backgroundColor : '#e6e6e6', position :'fixed', width: '100%', 'z-index': '999', height : '40px'}}>
      <Breadcrumb tag="nav" listTag="div" >
        {props.crumbs.map( (crumb, i) => {
            if(props.crumbs.length -1 !== i) 
            return <BreadcrumbItem tag="a"  href={crumb.link}>{crumb.title}</BreadcrumbItem>
            else  return <BreadcrumbItem active tag="span">{crumb.title}</BreadcrumbItem>
        })}
        {/* <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/about">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem> */}
      </Breadcrumb>
    </div>
  );
};

export default Example;