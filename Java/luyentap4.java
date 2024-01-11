package Java;
import java.util.ArrayList;
import java.util.Scanner;

public class luyentap4 {
      private String tencaPhe;
      private float giaTien1kg;
      private float soKg;
  public luyentap4(String ten , float gia , float soluong){
            this.tencaPhe = ten;
            this.giaTien1kg = gia;
            this.soKg = soluong;
  }
  public void setTencaPhe(String tencaPhe) {
      this.tencaPhe = tencaPhe;
  }
  public void setGiaTien1kg(float giaTien1kg) {
      this.giaTien1kg = giaTien1kg;
  }
  public void setSoKg(float soKg) {
      this.soKg = soKg;
  }
  public String getTencaPhe() {
      return tencaPhe;
  }
  public float getSoKg() {
      return soKg;
  }
  public float getGiaTien1kg() {
      return giaTien1kg;
  }
  public float TinhTongTien(){
        return giaTien1kg * soKg;
  }
     public boolean  khoiluonglonhon20( double khoiluong){
      return this.soKg > khoiluong;
  }
  public double  soTienduocgiam(double x){
    if(this.TinhTongTien()>1200000){
        return (x/100)*this.TinhTongTien();
    }else{
        return 0;
     }
    }
        
     
      public static void main(String[] args) {
          luyentap4 lt = new luyentap4("Trung Nguyên", 100000, 10);
        
          System.out.println("Tong tien : " + lt.TinhTongTien());
          System.out.println("Ten Ca Phe :" + lt.tencaPhe);
          System.out.println("Gia Tien / 1Kg :" + lt.giaTien1kg);
          System.out.println("Khoi luong lon hon so nhap khong" + lt.khoiluonglonhon20(5.5));
          System.out.println("So Tien Duoc Giam :" + lt.soTienduocgiam(10));
          
      }
}
