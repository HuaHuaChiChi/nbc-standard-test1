import React from "react";

// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList({name, age, grade}) {

  // const {name, age, grade} = filteredStudents
  return (
    <ul>
      <li>
        <p>{name}-{age}세-{grade}등급</p>
      </li>
      {/* ex: 홍길동 (20세) - A등급 */}
    </ul>
  );
}

export default StudentList;
