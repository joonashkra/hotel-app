using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelApp.Server.Tests.Abstractions
{
    public class BaseFunctionalTest : IClassFixture<FunctionalTestWebAppFactory>
    {

        public BaseFunctionalTest(FunctionalTestWebAppFactory factory) 
        {
            HttpClient = factory.CreateClient();
        }

        protected HttpClient HttpClient { get; init; }

    }
}
