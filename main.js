name_of_the_student_array = [];
function sub(){
    var name1 = document.getElementById("Student_1").value;
    var name2 = document.getElementById("Student_2").value;
    var name3 = document.getElementById("Student_3").value;
    var name4 = document.getElementById("Student_4").value;
    
    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);

    document.getElementById("disp_name").innerHTML = name_of_the_student_array;

    document.getElementById("btn_submit").style.display = "none";
    document.getElementById("btn_sort").style.display = "inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    document.getElementById("disp_name").innerHTML = name_of_the_student_array;
}