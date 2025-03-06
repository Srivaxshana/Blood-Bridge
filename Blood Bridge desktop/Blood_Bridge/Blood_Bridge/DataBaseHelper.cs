using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SQLite;
using System.Windows.Controls;

namespace Blood_Bridge
{
    public class DataBaseHelper
    {
        private string connectionString = "Data Source=donors.db;Version=3;";

        // Create database if it doesn't exist
        public void InitializeDatabase()
        {
            using (var connection = new SQLiteConnection(connectionString))
            {
                /*connection.Open();
                var query = "CREATE TABLE IF NOT EXISTS Donors (DonorID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, BloodType TEXT, Contact TEXT, Address TEXT)";
                using (var command = new SQLiteCommand(query, connection))
                {
                    command.ExecuteNonQuery();
                }*/
                /* string createTableQuery = "CREATE TABLE IF NOT EXISTS Donors (" +
                                          "DonorID INTEGER PRIMARY KEY AUTOINCREMENT, " +
                                          "Name TEXT, " +
                                          "BloodType TEXT, " +
                                          "Contact TEXT, " +
                                          "Address TEXT);";
                using (var command = new SQLiteCommand(createTableQuery, connection))
                {
                    command.ExecuteNonQuery();
                }
                */
                connection.Open();
                string createTableQuery = @"CREATE TABLE IF NOT EXISTS Donors (
                                        DonorID INTEGER PRIMARY KEY AUTOINCREMENT,
                                        Name TEXT NOT NULL,
                                        Age TEXT NOT NULL,
                                        DOB TEXT NOT NULL,
                                        Gender TEXT NOT NULL,
                                        BloodType TEXT NOT NULL,
                                        Contact TEXT NOT NULL,
                                        Email TEXT NOT NULL,
                                        Address TEXT NOT NULL,
                                        City TEXT NOT NULL,
                                        District TEXT NOT NULL)";
                using (var command = new SQLiteCommand(createTableQuery, connection))
                {
                    command.ExecuteNonQuery();
                }
            }
        }

        public List<Donar> GetAllDonors()
        {
            var donors = new List<Donar>();
            using (var connection = new SQLiteConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT * FROM Donors";
                using (var command = new SQLiteCommand(query, connection))
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        
                        donors.Add(new Donar
                        {
                            
                            DonorID = reader.GetInt32(0),
                            Name = reader.GetString(10),
                            Age = reader.GetInt32(5),
                            DOB = reader.IsDBNull(10) ? DateTime.MinValue : reader.GetDateTime(6),
                            Gender = reader.GetString(7),

                            BloodType = reader.GetString(2),
                            Contact = reader.GetString(10),
                            Address = reader.GetString(20)
                        });
                    }
                }
            }
            return donors;
        }



        // Create a new donor
        public void AddDonor(Donar donor)
        {
            using (var connection = new SQLiteConnection(connectionString))
            {
                connection.Open();
                string query = "INSERT INTO Donors (Name, BloodType, Contact, Address) VALUES (@Name, @BloodType, @Contact, @Address)";
                using (var command = new SQLiteCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@DonorID", donor.DonorID);
                    command.Parameters.AddWithValue("@Name", donor.Name);
                    command.Parameters.AddWithValue("@Age", donor.Age);
                    command.Parameters.AddWithValue("@DOB", donor.DOB);
                    command.Parameters.AddWithValue("@Gender", donor.Gender);
                    command.Parameters.AddWithValue("@BloodType", donor.BloodType);
                    command.Parameters.AddWithValue("@Contact", donor.Contact);
                    command.Parameters.AddWithValue("@Email", donor.Email);
                    command.Parameters.AddWithValue("@Address", donor.Address);
                    command.Parameters.AddWithValue("@City", donor.City);
                    command.Parameters.AddWithValue("@District", donor.District);
                    command.ExecuteNonQuery();
                }
                /*
                
                connection.Open();
                var query = "INSERT INTO Donors (Name, BloodType, Contact, Address) VALUES (@Name, @BloodType, @Contact, @Address)";
                using (var command = new SQLiteCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Name", donor.Name);
                    command.Parameters.AddWithValue("@BloodType", donor.BloodType);
                    command.Parameters.AddWithValue("@Contact", donor.Contact);
                    command.Parameters.AddWithValue("@Address", donor.Address);
                    command.ExecuteNonQuery();
                }
                */
            }
        }

        // Get all donors
        /*  public List<Donar> GetAllDonors()
          {
              List<Donar> donors = new List<Donar>();
              using (var connection = new SQLiteConnection(connectionString))
              {
                  connection.Open();
                  string query = "SELECT * FROM Donors";
                  using (var command = new SQLiteCommand(query, connection))
                  {
                      using (var reader = command.ExecuteReader())
                      {
                          while (reader.Read())
                          {
                              donors.Add(new Donar
                              {
                                  DonorID = reader.GetInt32(0),
                                  Name = reader.GetString(1),
                                  BloodType = reader.GetString(2),
                                  Contact = reader.GetString(3),
                                  Address = reader.GetString(4)
                              });
                          }
                      }
                  }
              }
              return donors;
          }
        */
        // Update a donor's details
        public void UpdateDonor(Donar donor)
        {
            /* using (var connection = new SQLiteConnection(connectionString))
             {
                 connection.Open();
                 string query = "UPDATE Donors SET Name = @Name, BloodType = @BloodType, Contact = @Contact, Address = @Address WHERE DonorID = @DonorID";
                 using (var command = new SQLiteCommand(query, connection))
                 {
                     command.Parameters.AddWithValue("@DonorID", donor.DonorID);
                     command.Parameters.AddWithValue("@Name", donor.Name);
                     command.Parameters.AddWithValue("@BloodType", donor.BloodType);
                     command.Parameters.AddWithValue("@Contact", donor.Contact);
                     command.Parameters.AddWithValue("@Address", donor.Address);
                     command.ExecuteNonQuery();
                 }
             }
            */
            using (var connection = new SQLiteConnection(connectionString))
            {
                connection.Open();
                string query = "UPDATE Donors SET Name = @Name, BloodType = @BloodType, Contact = @Contact, Address = @Address WHERE DonorID = @DonorID";
                using (var command = new SQLiteCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@DonorID", donor.DonorID);
                    command.Parameters.AddWithValue("@Name", donor.Name);
                    command.Parameters.AddWithValue("@Age", donor.Age);
                    command.Parameters.AddWithValue("@DOB", donor.DOB);
                    command.Parameters.AddWithValue("@Gender", donor.Gender);
                    command.Parameters.AddWithValue("@BloodType", donor.BloodType);
                    command.Parameters.AddWithValue("@Contact", donor.Contact);
                    command.Parameters.AddWithValue("@Email", donor.Email);
                    command.Parameters.AddWithValue("@Address", donor.Address);
                    command.Parameters.AddWithValue("@City", donor.City);
                    command.Parameters.AddWithValue("@District", donor.District);
                    command.ExecuteNonQuery();
                }
            }
        }

        // Delete a donor
        public void DeleteDonor(int donorID)
        {

            /*
             using (var connection = new SQLiteConnection(connectionString))
            {
                connection.Open();
                string query = "DELETE FROM Donors WHERE DonorID = @DonorID";
                using (var command = new SQLiteCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@DonorID", donorID);
                    command.ExecuteNonQuery();
                }
            }
            */
            using (var connection = new SQLiteConnection(connectionString))
            {
                connection.Open();
                string query = "DELETE FROM Donors WHERE DonorID = @DonorID";
                using (var command = new SQLiteCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@DonorID", donorID);
                    command.ExecuteNonQuery();
                }
            }
        }
        /*
       public List<Donar> GetAllDonors()
        {
            var donors = new List<Donar>();
            using (var connection = new SQLiteConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT * FROM Donors";
                using (var command = new SQLiteCommand(query, connection))
                {
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            donors.Add(new Donar
                            {
                                DonorID = reader.GetInt32(0),
                                Name = reader.GetString(1),
                                BloodType = reader.GetString(2),
                                Contact = reader.GetString(3),
                                Address = reader.GetString(4)
                            });
                        }
                    }
                }
            }
            return donors;
        }
        */
    }

}
