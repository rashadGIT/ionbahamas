import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Example = (props) => {
  return (
    <div style={{backgroundColor : '#e6e6e6', position :'fixed', width: '100%', zIndex: '999', height : 40, top : 55}}>
      <Breadcrumb tag="nav" listTag="div" >
        {props.crumbs.map( (crumb, i) => {
            if(props.crumbs.length -1 !== i) 
            return <BreadcrumbItem key={i} tag="a"  href={crumb.link}>{crumb.title}</BreadcrumbItem>
            else  return <BreadcrumbItem active key={i} tag="span">{crumb.title}</BreadcrumbItem>
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