import React from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";

// export default class News extends Component {
//   render() {
//     console.log(this.props);
//     // params传递
//     // const { title } = this.props.match.params;
//     // search传递
//     const { search } = this.props.location;
//     const { title } = qs.parse(search.slice(1));
//     // state传递（页面刷新会失去state数据）
//     // const { title } = this.props.location.state || {};
//     return <div>{title}</div>;
//   }
// }

export default function News() {
  // params传递
  const { title } = useParams();
  // search传递
  // const [search,setSearch] = useSearchParams();
  // const title = search.get("title");
  // state传递
  // const { title } = useLocation().state;

  return <div>{title}</div>;
}
