using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using VirtualShopping.Domain.Entities;
using VirtualShopping.DAL.Implement.Data;
using VirtualShopping.BLL.Interface;
using VirtualShopping.Domain.Requests.ShopDTO;
using VirtualShopping.Domain.Responses.Shop;
using VirtualShopping.DAL.Interface;
using VirtualShopping.Domain.Utilities;
using System.Diagnostics;
using Microsoft.Extensions.Logging;

namespace VirtualShopping.Controllers
{
    public class ShopController : BaseController
    {
        private readonly IShopService _shopService;
        private readonly ILogger<ShopController> _log;

        public ShopController(IShopService shopService, ILogger<ShopController> log)
        {
            _shopService = shopService;
            _log = log;
        }
        /// <summary>
        /// Reigster a new Shop
        /// </summary>
        /// <param name="dto"></param>
        /// <returns>An object of PhoneNumber</returns>
        [HttpPost("register")]
        public async Task<ActionResult<ShopDTO>> Register([FromForm] ShopRegisterDTO dto)
        {
            var shop = await _shopService.Register(dto);
            if (!string.IsNullOrEmpty(shop.ErrorMessage))
            {
                return BadRequest(shop.ErrorMessage);
            }
            return Ok(shop);
        }
        /// <summary>
        /// Shop login by Phone Number
        /// </summary>
        /// <param name="dto"></param>
        /// <returns>Response for login process</returns>
        [HttpPost("login")]
        public async Task<ActionResult<ShopDTO>> Login(ShopLoginDTO dto){
            var shop = await _shopService.Login(dto);
            if (!string.IsNullOrEmpty(shop.ErrorMessage))
            {
                return BadRequest(shop.ErrorMessage);
            }
            return Ok(shop);
        }
        /// <summary>
        /// Update Shop information
        /// </summary>
        /// <param name="dto"></param>
        /// <returns>Response of update Shop information process</returns>
        [HttpPut]
        public async Task<ActionResult<ShopDTO>> Update([FromForm] ShopUpdateDTO dto){
            if (ModelState.IsValid)
            {
                var shop = await _shopService.Update(dto);
                return string.IsNullOrEmpty(shop.ErrorMessage)
                    ? Ok(shop)
                    : BadRequest(shop.ErrorMessage);
            }
            return BadRequest(ErrorConstants.InvalidForm);
        }
        /// <summary>
        /// Delete a exists Shop
        /// </summary>
        /// <param name="dto"></param>
        /// <returns>Response for deleted Shop process</returns>
        [HttpDelete("delete")]
        public async Task<ActionResult<ShopDTO>> Delete(ShopDeleteDTO dto){
            var shop = await _shopService.Delete(dto);
            if (!string.IsNullOrEmpty(shop.ErrorMessage))
            {
                return BadRequest(shop.ErrorMessage);
            }
            return Ok(shop);
        }
        /// <summary>
        /// Get Shop Info by Id
        /// </summary>
        /// <param name="Shop Id"></param>
        /// <returns>An object of new customer</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<ShopInfoDTO>> GetShopInfoById(string id)
        {
            var watch = new Stopwatch();
            watch.Start();
            var shop = await _shopService.GetShopInfoById(id).ConfigureAwait(false);
            watch.Stop();
            _log.LogInformation($" Request GetShopInfoById {id} has: {watch.ElapsedMilliseconds}");
            if(shop != null)
            {
                return Ok(shop);
            }

            return NotFound();
        }

        /// <summary>
        /// Get list of shops
        /// </summary>
        /// <returns>List of shops</returns>
        [HttpGet("all")]
        public async Task<ActionResult<ShopInfoDTO>> GetShops()
        {
            var shop = await _shopService.GetShops();
            return Ok(shop);
        }
    }
}
