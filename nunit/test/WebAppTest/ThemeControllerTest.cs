using Microsoft.AspNetCore.Mvc;
using Moq;
using WebApp.Controllers;
using WebApp.Infrastructure;
using WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using Xunit;
 
namespace WebAppTest
{
    public class ThemeControllerTest
    {
        [Fact]
        public void Test_GET_AllThemes()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.Themes).Returns(Multiple());
            var controller = new ThemeController(mockRepo.Object);
 
            // Act
            var result = controller.Get();
 
            // Assert
            var model = Assert.IsAssignableFrom<IEnumerable<Theme>>(result);
            Assert.Equal(3, model.Count());
        }
 
        private static IEnumerable<Theme> Multiple()
        {
            var r = new List<Theme>();
            r.Add(new Theme()
            {
                themeId = 01,
                themeName = "ABC",
                themeImageURL = "ABC.png",
                themeDescription = "attractive",
                themePhotographer = "XYZ",
                themeVideographer = "PQR",
                ThemeReturnGift = "yes",
                ThemeCost = 100000
            });
            r.Add(new Theme()
            {
                themeId = 02,
                themeName = "ABC",
                themeImageURL = "ABC.png",
                themeDescription = "attractive",
                themePhotographer = "XYZ",
                themeVideographer = "PQR",
                ThemeReturnGift = "yes",
                ThemeCost = 100000
            });
            r.Add(new Theme()
            {
                themeId = 03,
                themeName = "ABC",
                themeImageURL = "ABC.png",
                themeDescription = "attractive",
                themePhotographer = "XYZ",
                themeVideographer = "PQR",
                ThemeReturnGift = "yes",
                ThemeCost = 100000
            });
            return r;
        }

        [Fact]
        public void Test_POST_AddTheme()
        {
            // Arrange
            Theme r = new Theme()
            {
                themeId = 04,
                themeName = "ABC",
                themeImageURL = "ABC.png",
                themeDescription = "attractive",
                themePhotographer = "XYZ",
                themeVideographer = "PQR",
                ThemeReturnGift = "yes",
                ThemeCost = 100000
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.AddTheme(It.IsAny<Theme>())).Returns(r);
            var controller = new ThemeController(mockRepo.Object);
        
            // Act
            var result = controller.Post(r);
        
            // Assert
            var theme = Assert.IsType<Theme>(result);
            Assert.Equal(04, theme.Id);
            Assert.Equal("ABC", theme.themeName);
            Assert.Equal("ABC.png", theme.themeImageURL);
            Assert.Equal("attractive", theme.themeDescription);
            Assert.Equal("xYZ", theme.themePhotographer);
            Assert.Equal("PQR", theme.themeVideographer);
            Assert.Equal("yes", theme.ThemeReturnGift);
            Assert.Equal(100000, theme.ThemeCost);

        }

        [Fact]
        public void Test_PUT_UpdateTheme()
        {
            // Arrange
            Theme r = new Theme()
            {
                themeId = 03,
                themeName = "new ABC",
                themeImageURL = "ABC.png",
                themeDescription = "attractive",
                themePhotographer = "XYZ",
                themeVideographer = "PQR",
                ThemeReturnGift = "yes",
                ThemeCost = 100000
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.UpdateTheme(It.IsAny<Theme>())).Returns(r);
            var controller = new ThemeController(mockRepo.Object);
        
            // Act
            var result = controller.Put(r);
        
            // Assert
            var theme = Assert.IsType<Theme>(result);
            Assert.Equal(03, theme.Id);
            Assert.Equal("new ABC", theme.themeName);
            Assert.Equal("ABC.png", theme.themeImageURL);
            Assert.Equal("attractive", theme.themeDescription);
            Assert.Equal("xYZ", theme.themePhotographer);
            Assert.Equal("PQR", theme.themeVideographer);
            Assert.Equal("yes", theme.ThemeReturnGift);
            Assert.Equal(100000, theme.ThemeCost);
        }

        [Fact]
        public void Test_DELETE_Theme()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.DeleteTheme(It.IsAny<int>())).Verifiable();
            var controller = new ThemeController(mockRepo.Object);
        
            // Act
            controller.Delete(3);
        
            // Assert
            mockRepo.Verify();
        }
    }
}