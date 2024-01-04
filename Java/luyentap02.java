package Java;

import java.util.Scanner;

public class luyentap02 {
    public static void main(String[] args) {
        int x;
        Scanner sc = new Scanner(System.in);
        System.out.println("Moi nhap so X :");
        x = sc.nextInt();

        boolean isPrime = true;
        for (int i = 2; i < x; i++) {
            if (x % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            System.out.println("La So Nguyen To");
        } else {
            System.out.println("Khong Phai La So Nguyen To");

        }
    }
}
