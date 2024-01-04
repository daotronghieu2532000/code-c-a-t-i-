package Java;

public class luyentap03 {
    private String name;
    private int age;
    private char sex;
 public luyentap03(String name , int age , char sex){
        this.name = name ;
        this.age = age ;
        this.sex = sex;
 }
 public String getName() {
     return name;
 }
 public void setAge(int age) {
     this.age = age;
 }
 public void setSex(char sex) {
     this.sex = sex;
 }

 @Override
 public String toString() {
     return "name :" + this.name + " age :" + this.age + "sex :" + this.sex ;
 }
 public void tinhTien(){

 }
public static void main(String[] args) {
     luyentap03 lt = new luyentap03("hieu", 23, 'm');
     lt.age = 22;
     lt.name="trang";
     lt.sex='n';
    
}
}