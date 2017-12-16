<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'order_details';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'prefix', 'customer_note','amount','payment_method_Id','delivery_method_Id','tracking_number','affilate',
        'seller_name','seller_id','action','customer_id','customer_name','payment_name','payment_country_Id',
        'payment_state_Id','payment_city_Id','payment_zipcode','shipping_country_Id','shipping_state_Id',
        'shipping_city_Id','shipping_zipcode'
    ];
   
   
}
?>
