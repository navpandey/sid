<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
	protected $table = 'store';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'store_name','store_link','banner', 'phone','store_address','store_country','store_state','store_city','facebook_link','google_link','twitter_link','linkedin_link','youtube_link','instagram_link','flickr_link','status','user_id','selling','publishing','commission','featured','verified','promotinoal_link','promotion_banner','logo'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
