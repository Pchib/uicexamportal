import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OneQuestion from "./OneQuestion";
import { Pagination, Card, PaginationItem, PaginationLink } from "reactstrap";
// import styles from "./stylesheets/question.module.sass";

import { Button, Fade } from "reactstrap";
import React, { Component } from 'react'

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state={
fadeIn: false
    }
    this.toggle = this.toggle.bind(this)
  }
  

    toggle  () {
      this.setState({
        fadeIn: !this.state.fadeIn
      })}

  render() {
    const {questionArr, targetType  } = this.props;
    if(questionArr){
    
  questionArr.sort((item1, item2) => {
    return item1.id - item2.id;
  });

  const listItems = questionArr.map((item, key) => (
    <div>
      <div className="my" style={{ display: "none" }}>
                <Card className="cards py-5">

          <OneQuestion
            key={item.id + 10 * item.type}
            id={item.id}
            type={item.type}
            question={item.question}
          /> 
          </Card>
      </div>
    </div>
  ));
    return (
      <div>
        <div className="ml-5">
          <div>
            <div className="toptitle mb-3">
              <Card className="cards1 py-2">
                Click on any question And Answer
              </Card>
            </div>
            <div>{listItems}</div>
          </div>
          <div>
            {" "}
            <Pagination
              size="sm"
              className="pagination"
              aria-label="Page navigation example"
            >
              <PaginationItem>
                <PaginationLink
                  className="paginationLi"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "block";

                      a[1].style.display = "none";
                      a[2].style.display = "none";
                      a[3].style.display = "none";
                      a[4].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "none";

                      console.log(a[1]);
                    }
                  }}
                >
                  Q 1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="paginationLi ml-3"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";
                      a[1].style.display = "block";
                      a[2].style.display = "none";
                      a[3].style.display = "none";
                      a[4].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "none";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="paginationLi ml-3"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";
                      a[1].style.display = "none";
                      a[2].style.display = "block";
                      a[3].style.display = "none";
                      a[4].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "none";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="paginationLi ml-3"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";
                      a[1].style.display = "none";
                      a[2].style.display = "none";
                      a[3].style.display = "block";
                      a[4].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "none";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="paginationLi ml-3"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";
                      a[1].style.display = "none";
                      a[2].style.display = "none";
                      a[3].style.display = "none";
                      a[4].style.display = "block";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "none";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 5
                </PaginationLink>
              </PaginationItem>{" "}
            </Pagination>
            <Pagination
              size="sm"
              className="pagination pag2"
              aria-label="Page navigation example"
            >
              <PaginationItem>
                <PaginationLink
                  className="paginationLi"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";

                      a[1].style.display = "none";
                      a[2].style.display = "none";
                      a[3].style.display = "none";
                      a[4].style.display = "none";
                      a[5].style.display = "block";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "none";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 6
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="paginationLi ml-3"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";
                      a[1].style.display = "none";
                      a[2].style.display = "none";
                      a[3].style.display = "none";
                      a[4].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "block";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "none";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 7
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="paginationLi ml-3"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";
                      a[1].style.display = "none";
                      a[2].style.display = "none";
                      a[3].style.display = "none";
                      a[4].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "block";
                      a[8].style.display = "none";
                      a[9].style.display = "none";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 8
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="paginationLi ml-3"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";
                      a[1].style.display = "none";
                      a[2].style.display = "none";
                      a[3].style.display = "none";
                      a[4].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "block";
                      a[9].style.display = "none";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 9
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="paginationLi ml-3"
                  onClick={() => {
                    if (questionArr) {
                      let a = document.getElementsByClassName("my");
                      a[0].style.display = "none";
                      a[1].style.display = "none";
                      a[2].style.display = "none";
                      a[3].style.display = "none";
                      a[4].style.display = "none";
                      a[5].style.display = "none";
                      a[6].style.display = "none";
                      a[7].style.display = "none";
                      a[8].style.display = "none";
                      a[9].style.display = "block";
                      console.log(a[1]);
                    }
                  }}
                >
                  Q 10
                </PaginationLink>
              </PaginationItem>{" "}
            </Pagination>
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <h1>Something went wrong</h1>
    )
  }
}

}
// export default function Questions = ({ questionArr, targetType }){
//   console.log(targetType);
//   console.log(questionArr);

//   const [fadeIn, setFadeIn] = useState(true);

//   const toggle = () => setFadeIn(!fadeIn);

//   questionArr.sort((item1, item2) => {
//     return item1.id - item2.id;
//   });

//   const listItems = questionArr.map((item, key) => (
//     <div>
//       <div className="my" style={{ display: "none" }}>
//         <Fade in={fadeIn} tag="h5" className="mt-3">
//           <OneQuestion
//             key={item.id + 10 * item.type}
//             id={item.id}
//             type={item.type}
//             question={item.question}
//           />
//         </Fade>
//       </div>
//     </div>
//   ));

//   return (
//     <div>
//       <div>
//         Click on any question And Answer <div>{listItems}</div>
//       </div>

//       <Pagination size="sm" aria-label="Page navigation example">
//         <PaginationItem>
//           <PaginationLink
//             onClick={() => {
//               if (questionArr) {
//                 let a = document.getElementsByClassName("my");

//                 a[0].style.display = "block";
//                 toggle;
//                 a[1].style.display = "none";
//                 a[2].style.display = "none";
//                 a[3].style.display = "none";
//                 a[4].style.display = "none";
//                 console.log(a[1]);
//               }
//             }}
//           >
//             Q 1
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink
//             onClick={() => {
//               if (questionArr) {
//                 let a = document.getElementsByClassName("my");
//                 a[0].style.display = "none";
//                 a[1].style.display = "block";
//                 a[2].style.display = "none";
//                 a[3].style.display = "none";
//                 a[4].style.display = "none";
//                 console.log(a[1]);
//               }
//             }}
//           >
//             Q 2
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink
//             onClick={() => {
//               if (questionArr) {
//                 let a = document.getElementsByClassName("my");
//                 a[0].style.display = "none";
//                 a[1].style.display = "none";
//                 a[2].style.display = "block";
//                 a[3].style.display = "none";
//                 a[4].style.display = "none";
//                 console.log(a[1]);
//               }
//             }}
//           >
//             Q 3
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink
//             onClick={() => {
//               if (questionArr) {
//                 let a = document.getElementsByClassName("my");
//                 a[0].style.display = "none";
//                 a[1].style.display = "none";
//                 a[2].style.display = "none";
//                 a[3].style.display = "block";
//                 a[4].style.display = "none";
//                 console.log(a[1]);
//               }
//             }}
//           >
//             Q 4
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink
//             onClick={() => {
//               if (questionArr) {
//                 let a = document.getElementsByClassName("my");
//                 a[0].style.display = "none";
//                 a[1].style.display = "none";
//                 a[2].style.display = "none";
//                 a[3].style.display = "none";
//                 a[4].style.display = "block";
//                 console.log(a[1]);
//               }
//             }}
//           >
//             Q 5
//           </PaginationLink>
//         </PaginationItem>
//       </Pagination>
//     </div>
//   );
// };

