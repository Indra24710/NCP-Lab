Live Demo
import java.sql.*;

public class jdbc {
   public static void main(String[] args) {
     
      System.out.println("JDBC loaded");
      int no_of_rows = 0;
      
      try {
         Connection con = DriverManager.getConnection ("jdbc:indra://localhost:1527/q1","indra", "password");  
         Statement stmt = con.createStatement();
         //q1.1
         ResultSet q11 = stmt.executeQuery ("SELECT name,roll FROM student where cgpa > 8");
        //q1.2
         ResultSet q12 = stmt.executeQuery ("SELECT roll FROM student where placed==\'Infosys\' ");
        //q1.3
         ResultSet q13 = stmt.executeQuery ("SELECT * FROM student ORDER BY roll ASC");
         while (q11.next()) {
            no_of_rows++;
         } 
         System.out.println("There are "+ no_of_rows + " records retrieved for students with cgpa<8");
         no_of_rows = 0;
          while (q12.next()) {
            no_of_rows++;
         } 
         System.out.println("There are "+ no_of_rows + " records retrieved for students placed in infosys");
         no_of_rows = 0;
          while (q13.next()) {
            no_of_rows++;
         } 
         System.out.println("There are "+ no_of_rows + " records retrieved for students sorted according to roll no\'s");
      } catch(SQLException e){
         System.out.println("SQL exception occured" + e);
      }
   }
}