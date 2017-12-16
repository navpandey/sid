<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmailMsg extends Model
{
    protected $table = 'email_msgs';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email_section','email_subject', 'email_body'
    ];

    
}
