using System.Runtime.Serialization;

namespace API.Models
{
    public class AppInfo
    {
        #region public properties
        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "version")]
        public string Version { get; set; }

        [DataMember(Name = "description")]
        public string Description { get; set; }

        public DateTime Timestamp { get; set; }
        #endregion

        #region constructors
        public AppInfo() { }

        #endregion
    }
}
