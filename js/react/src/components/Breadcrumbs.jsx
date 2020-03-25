import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs = (props) => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div" >
        {props.crumbs.map( (crumb, i) => {
            console.log(crumb)
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

export default Breadcrumbs;